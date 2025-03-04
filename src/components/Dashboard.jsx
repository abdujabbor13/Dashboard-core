import * as React from "react";
import { extendTheme, styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import Card from "./Card";

// **NAVIGATION MENU**
const NAVIGATION = [
  { kind: "header", title: "Main items" },
  { segment: "dashboard", title: "Dashboard", icon: <DashboardIcon /> },
  { segment: "orders", title: "Orders", icon: <ShoppingCartIcon /> },
  { kind: "divider" },
  { kind: "header", title: "Analytics" },
  {
    segment: "reports",
    title: "Reports",
    icon: <BarChartIcon />,
    children: [
      { segment: "sales", title: "Sales", icon: <DescriptionIcon /> },
      { segment: "traffic", title: "Traffic", icon: <DescriptionIcon /> },
    ],
  },
  { segment: "integrations", title: "Integrations", icon: <LayersIcon /> },
];

// **THEME CONFIG**
const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: "class",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1536,
    },
  },
});

// **ROUTER FUNCTION**
function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  return React.useMemo(
    () => ({
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    }),
    [pathname]
  );
}

// **SKELETON COMPONENT**
const Skeleton = styled("div")(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
}));

// **DASHBOARD COMPONENT**
export default function Dashboard() {
  return (
    <>
      <DashboardLayoutBasic />
    </>
  );
}

// **DASHBOARD LAYOUT**
function DashboardLayoutBasic(props) {
  const { window } = props;
  const router = useDemoRouter("/dashboard");

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={window}
    >
      <DashboardLayout>
        <div className="container">
          <h2
            style={{
              marginTop: "20px",
              fontSize: "40px",
              fontWeight: "600",
              marginBottom: "24px",
            }}
          >
            Products dashboard
          </h2>
          <Card />
        </div>
      </DashboardLayout>
    </AppProvider>
  );
}
