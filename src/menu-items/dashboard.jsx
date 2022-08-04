// assets
import {
	DashboardOutlined,
	LoginOutlined,
	ProfileOutlined,
	ChromeOutlined,
	QuestionOutlined,
	FontSizeOutlined,
	BgColorsOutlined,
	BarcodeOutlined,
	AntDesignOutlined,
	LoadingOutlined,
	AppstoreAddOutlined,
} from "@ant-design/icons";

// icons
const icons = {
	DashboardOutlined,
	LoginOutlined,
	ProfileOutlined,
	ChromeOutlined,
	QuestionOutlined,
	FontSizeOutlined,
	BgColorsOutlined,
	BarcodeOutlined,
	AntDesignOutlined,
	LoadingOutlined,
	AppstoreAddOutlined,
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
	id: "group-dashboard",
	title: "Navigation",
	type: "group",
	children: [
		{
			id: "dashboard",
			title: "Dashboard",
			type: "item",
			url: "/dashboard/default",
			icon: icons.DashboardOutlined,
			breadcrumbs: false,
		},
		{
			id: "login1",
			title: "Login",
			type: "item",
			url: "/login",
			icon: icons.LoginOutlined,
		},
		{
			id: "register1",
			title: "Register",
			type: "item",
			url: "/register",
			icon: icons.ProfileOutlined,
		},
		{
			id: "sample-page",
			title: "Sample Page",
			type: "item",
			url: "/sample-page",
			icon: icons.ChromeOutlined,
		},
		{
			id: "util-typography",
			title: "Typography",
			type: "item",
			url: "/typography",
			icon: icons.FontSizeOutlined,
		},
		{
			id: "util-color",
			title: "Color",
			type: "item",
			url: "/color",
			icon: icons.BgColorsOutlined,
		},
		{
			id: "util-shadow",
			title: "Shadow",
			type: "item",
			url: "/shadow",
			icon: icons.BarcodeOutlined,
		},
		{
			id: "ant-icons",
			title: "Ant Icons",
			type: "item",
			url: "/icons/ant",
			icon: icons.AntDesignOutlined,
			breadcrumbs: false,
		},
	],
};

export default dashboard;
