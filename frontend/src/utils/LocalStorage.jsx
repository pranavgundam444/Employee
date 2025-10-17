const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    name: "Eshwar",
    password: "123",
    taskCounts: {
        active: 2,
        newTask: 1,
        completed: 1,
        failed: 0
    },
    tasks: [
      {
        title: "Prepare weekly report",
        description: "Compile sales data and prepare the weekly performance report.",
        date: "2025-10-10",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Update client database",
        description: "Add new leads and update contact information in the CRM.",
        date: "2025-10-08",
        category: "Data Entry",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix website bug",
        description: "Resolve the navigation issue on the landing page.",
        date: "2025-10-09",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Team meeting preparation",
        description: "Create agenda and presentation slides for the upcoming meeting.",
        date: "2025-10-12",
        category: "Planning",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    name: "Chandramukhi",
    password: "123",
    taskCounts: {
        active: 1,
        newTask: 2,
        completed: 3,
        failed: 5
    },
    tasks: [
      {
        title: "Design homepage banner",
        description: "Create a new promotional banner for the homepage.",
        date: "2025-10-07",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Client feedback review",
        description: "Analyze client feedback to identify improvement areas.",
        date: "2025-10-09",
        category: "Analysis",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Social media content plan",
        description: "Plan and schedule posts for the upcoming month.",
        date: "2025-10-11",
        category: "Marketing",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    name: "Gunashekhar",
    password: "123",
    taskCounts: {
        active: 4,
        newTask: 2,
        completed: 1,
        failed: 3
    },
    tasks: [
      {
        title: "Database backup",
        description: "Perform a full database backup before the system update.",
        date: "2025-10-06",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Code review",
        description: "Review pull requests and ensure code quality standards.",
        date: "2025-10-10",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Implement authentication module",
        description: "Add secure login and registration functionality.",
        date: "2025-10-13",
        category: "Development",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix API error handling",
        description: "Improve error handling in API endpoints.",
        date: "2025-10-11",
        category: "Backend",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Write unit tests",
        description: "Add Jest tests for user and task modules.",
        date: "2025-10-12",
        category: "Testing",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    name: "Ganga",
    password: "123",
    taskCounts: {
        active: 1,
        newTask: 2,
        completed: 4,
        failed: 1
    },
    tasks: [
      {
        title: "Product demo presentation",
        description: "Prepare slides and rehearse for the client demo.",
        date: "2025-10-09",
        category: "Sales",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Follow-up emails",
        description: "Send follow-up emails to leads from last week’s webinar.",
        date: "2025-10-07",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Organize training session",
        description: "Schedule and organize a product training for new employees.",
        date: "2025-10-13",
        category: "HR",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Create sales report",
        description: "Summarize the monthly performance and key deals closed.",
        date: "2025-10-08",
        category: "Sales",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    name: "Raja",
    password: "123",
    taskCounts: {
        active: 1,
        newTask: 1,
        completed: 3,
        failed: 0
    },
    tasks: [
      {
        title: "Optimize SEO tags",
        description: "Audit website pages and improve meta tags for SEO.",
        date: "2025-10-06",
        category: "SEO",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Blog post writing",
        description: "Write and publish the October marketing trends blog.",
        date: "2025-10-10",
        category: "Content",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Newsletter design",
        description: "Design layout for the upcoming customer newsletter.",
        date: "2025-10-11",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Keyword analysis",
        description: "Research and compile new keywords for Q4 marketing.",
        date: "2025-10-12",
        category: "SEO",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Proofread web copy",
        description: "Review and correct content for homepage and product pages.",
        date: "2025-10-09",
        category: "Content",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    name: "Pranav",
    email: "pranav@gmail.com",
    password: "123"
  }
];



export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))
    return {employees, admin}
}