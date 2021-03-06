import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { WebcamComponent } from 'app/pages/webcam/webcam.component';
import { VideoStreamComponent } from 'app/pages/video-stream/video-stream.component';
import { DrapPictureComponent } from 'app/pages/drap-picture/drap-picture.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'webcam', component: WebcamComponent},
    {path: 'video-steam', component: VideoStreamComponent},
    {path: 'drag-picture', component: DrapPictureComponent}
    // { path: 'user',           component: UserComponent },
    // { path: 'table',          component: TableComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent }
];
