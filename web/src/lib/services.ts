export type Service = {
  slug: string;
  title: string;
  icon: "camera" | "alarm" | "gate" | "car" | "gps";
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  sampleProject: string;
  responseTime: string;
};

export const services: Service[] = [
  {
    slug: "cctv-installation",
    title: "CCTV Installation",
    icon: "camera",
    shortDescription:
      "Intelligent camera deployment with remote monitoring and crystal-clear surveillance.",
    description:
      "We design and install enterprise-grade CCTV systems for homes, offices, compounds, and industrial sites. Every setup is optimized for coverage, image clarity, and long-term reliability.",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Technician mounting CCTV camera",
    highlights: [
      "Site survey and blind-spot elimination plan",
      "Indoor/outdoor HD and night-vision cameras",
      "Remote view on phone, tablet, and control room",
      "NVR setup, recordings backup, and staff training",
    ],
    sampleProject:
      "Delivered a 24-camera warehouse security rollout with 30-day retention and live remote access.",
    responseTime: "Installation kickoff within 48 hours after approval.",
  },
  {
    slug: "alarm-systems",
    title: "Alarm Systems",
    icon: "alarm",
    shortDescription:
      "Layered intrusion and fire alarm systems engineered for total site protection.",
    description:
      "Our alarm systems combine intrusion, perimeter, and fire alerting into one reliable protection layer. We configure zones and escalation flows to match your security policy.",
    image:
      "https://images.pexels.com/photos/13060860/pexels-photo-13060860.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imageAlt: "Fire alarm control panel mounted on wall",
    highlights: [
      "Door, motion, perimeter, and fire sensors",
      "Instant siren + mobile and control-room notifications",
      "Custom zone scheduling for business hours",
      "Routine health checks and annual maintenance",
    ],
    sampleProject:
      "Integrated full alarm zoning for two office blocks and an after-hours logistics wing.",
    responseTime: "Same-day emergency support for active maintenance clients.",
  },
  {
    slug: "smart-gate-automation",
    title: "Smart Gate Automation",
    icon: "gate",
    shortDescription:
      "Secure access control with app-enabled gate automation and real-time status alerts.",
    description:
      "We automate residential and commercial gates with secure controls, visitor management, and audit logs. Systems are tuned for reliability, safety, and fast user experience.",
    image:
      "https://images.pexels.com/photos/6682880/pexels-photo-6682880.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imageAlt: "Person using a gate access keypad for controlled entry",
    highlights: [
      "App, RFID, keypad, and remote access options",
      "Visitor access logs with time-based permissions",
      "Safety sensors and anti-crush fail-safes",
      "Integration with CCTV and intercom systems",
    ],
    sampleProject:
      "Automated a gated estate entrance with resident access tags and visitor approval workflow.",
    responseTime: "Average deployment timeline: 3 to 5 working days.",
  },
  {
    slug: "car-alarm-systems",
    title: "Car Alarm Systems",
    icon: "car",
    shortDescription:
      "Advanced anti-theft vehicle security with tamper detection and rapid response alerts.",
    description:
      "Our vehicle alarm installations provide strong anti-theft protection without messy wiring or unreliable components. We install discreetly and tune sensitivity for real-world driving conditions.",
    image:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Vehicle security installation work",
    highlights: [
      "Shock, ignition, and tamper event detection",
      "Remote lock and panic trigger integration",
      "Clean concealed wiring and calibration",
      "Post-installation testing and owner guidance",
    ],
    sampleProject:
      "Installed anti-theft alarm kits across a 40-vehicle field operations fleet.",
    responseTime: "Typical fitment duration: 2 to 3 hours per vehicle.",
  },
  {
    slug: "gps-tracking-solutions",
    title: "GPS Tracking Solutions",
    icon: "gps",
    shortDescription:
      "Precise live vehicle tracking, route analytics, and fleet visibility dashboards.",
    description:
      "Track vehicles in real time, optimize route performance, and improve recovery capability. Our GPS platform is built for both single-vehicle users and growing fleets.",
    image:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Fleet GPS tracking dashboard",
    highlights: [
      "Live map tracking and route replay",
      "Geofencing, speed alerts, and idle analytics",
      "Driver behavior and utilization insights",
      "Theft-recovery support and alert escalation",
    ],
    sampleProject:
      "Reduced route deviations by 32% for a regional delivery fleet within the first quarter.",
    responseTime: "Tracking access enabled within 24 hours after device setup.",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
