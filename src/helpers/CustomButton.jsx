import { Button, Image } from "@nextui-org/react";
import { useResponsiveLayout } from "../hooks/useResponsiveLayout";

import PropTypes from "prop-types";

export const CustomButton = ({ icon, label }) => {
    const windowWidth = useResponsiveLayout();

    return (
        <Button
            type="submit"
            size="lg"
            css={{
                width: "100%",
                margin: "0 auto",
                maxWidth: "83%",
                background: "white",
                color: "black",
                borderRadius: "0.3rem",
                fontSize: windowWidth > 768 ? "12px" : "11px",
                fontWeight: "bold",
            }}
            icon={<Image src={icon} alt="Icon" width={30} height={30} />}
        >
            {label}
        </Button>
    );
};

CustomButton.propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};
