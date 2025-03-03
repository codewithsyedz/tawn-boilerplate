import LayoutProvider from "@/providers/layout.provider";
import LayoutContentProvider from "@/providers/content.provider";
import TawnCodeSidebar from '@/components/partials/sidebar'
import TawnCodeFooter from '@/components/partials/footer'
import ThemeCustomize from '@/components/partials/customizer'
import TawnCodeHeader from '@/components/partials/header'
const layout = async ({ children }: { children: React.ReactNode }) => {

    return (
        <LayoutProvider >
            <ThemeCustomize />
            <TawnCodeHeader />
            <TawnCodeSidebar />
            <LayoutContentProvider>
                {children}
            </LayoutContentProvider>
            <TawnCodeFooter />
        </LayoutProvider>
    )


};

export default layout;
