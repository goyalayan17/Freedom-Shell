export interface INavigationProps {
    isVisible: boolean;
    isPinned: boolean;
    isMinimized: boolean;
    onLeftNavOverlayClicked?: () => void;
    onPinClicked?: () => void;
    onMinimizeClicked?: () => void;
};