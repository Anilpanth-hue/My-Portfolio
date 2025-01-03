import { NextResponse } from 'next/server';

const LEETCODE_API = 'https://leetcode.com/graphql';
const USERNAME = 'anil123_0';

const query = `
  query userProfileCalendar($username: String!, $year: Int) {
    matchedUser(username: $username) {
      userCalendar(year: $year) {
        submissionCalendar
      }
    }
  }
`;

export async function GET() {
  try {
    const currentYear = new Date().getFullYear();
    const lastYear = currentYear - 1;
    
    // Fetch both current year and last year data
    const [currentYearResponse, lastYearResponse] = await Promise.all([
      fetch(LEETCODE_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables: {
            username: USERNAME,
            year: currentYear,
          },
        }),
      }),
      fetch(LEETCODE_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables: {
            username: USERNAME,
            year: lastYear,
          },
        }),
      }),
    ]);

    if (!currentYearResponse.ok || !lastYearResponse.ok) {
      throw new Error('Failed to fetch from LeetCode API');
    }

    const currentYearData = await currentYearResponse.json();
    const lastYearData = await lastYearResponse.json();

    // Combine and parse the calendars
    const currentYearCalendar = JSON.parse(
      currentYearData.data.matchedUser.userCalendar.submissionCalendar || '{}'
    );
    const lastYearCalendar = JSON.parse(
      lastYearData.data.matchedUser.userCalendar.submissionCalendar || '{}'
    );

    const combinedCalendar = {
      ...lastYearCalendar,
      ...currentYearCalendar,
    };

    // Transform the data into the format expected by react-calendar-heatmap
    const submissions = Object.entries(combinedCalendar).map(([timestamp, count]) => ({
      date: new Date(parseInt(timestamp) * 1000).toISOString().split('T')[0],
      count: Number(count),
    }));

    // Sort submissions by date
    submissions.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return NextResponse.json(submissions);
  } catch (error) {
    console.error('Error fetching LeetCode submissions:', error);
    return NextResponse.json({ error: 'Failed to fetch submissions' }, { status: 500 });
  }
}
