import { fetchYearContributions } from "./fetchYearContributions";

const fetchGraph = async (username: string): Promise<{ graph: string }> => {
  try {
    const currentYear = new Date().getFullYear();
    const currentYearContributions = await fetchYearContributions(
      username,
      currentYear
    );

    const dayWidth = 10;
    const dayHeight = 10;
    const dayPadding = 2;
    const weekPadding = 2;
    const svgPadding = 0;

    const startDate = new Date(currentYear, 0, 1); 
    const startDayIndex = startDate.getDay(); 

    const weeks = [];
    let currentWeek: { date: string; contributionCount: number }[] = [];

    for (let i = 0; i < currentYearContributions.length; i++) {
      currentWeek.push(currentYearContributions[i]);

      if (
        currentWeek.length === 7 ||
        i === currentYearContributions.length - 1
      ) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    }

    const numWeeks = weeks.length;
    const svgHeight = 7 * (dayHeight + dayPadding) + 2 * svgPadding;
    const svgWidth = numWeeks * (dayWidth + weekPadding) + 2 * svgPadding;

    function getFillColor(count: number): string {
      if (count === 0) return "#191919"; 
      if (count <= 5) return "#0E4429"; 
      if (count <= 10) return "#006D32";
      if (count <= 20) return "#26A641";
      return "#39D353";
    }

    const graph = `
    <svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg">
      ${weeks
        .map((week, weekIndex) =>
          week
            .map((day, dayIndex) => {
              const x = svgPadding + weekIndex * (dayWidth + weekPadding);
              const y =
                svgPadding +
                (weekIndex === 0
                  ? (dayIndex + startDayIndex) * (dayHeight + dayPadding)
                  : dayIndex * (dayHeight + dayPadding));
              const fillColor = getFillColor(day.contributionCount);
              return `<rect x="${x}" y="${y}" width="${dayWidth}" height="${dayHeight}" fill="${fillColor}" strokeWidth="0.5" stroke="#5d5e5e20" rx="2" ry="2" />`;
            })
            .join("")
        )
        .join("")}
    </svg>
    `;

    return {
      graph,
    };
  } catch (error) {
    console.log(error);
    return {
      graph: "Error",
    };
  }
};

export default fetchGraph;
