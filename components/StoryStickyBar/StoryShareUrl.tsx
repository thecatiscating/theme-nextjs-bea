import { FunctionComponent, MouseEventHandler, useRef, useState } from 'react';

import { IconPaste } from 'icons';

import styles from './StoryShareUrl.module.scss';

interface Props {
    url: string;
}

const TOOLTIP_HIDE_DELAY = 3000; // 3 seconds

const StoryShareUrl: FunctionComponent<Props> = ({ url }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isTooltipShown, setIsTooltipShown] = useState(false);

    const handleInputClick: MouseEventHandler<HTMLInputElement> = (event) => {
        const input = event.currentTarget;
        input.setSelectionRange(0, input.value.length);
    };

    const handleCopyButtonClick = () => {
        window.navigator.clipboard.writeText(url);
        setIsTooltipShown(true);

        if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.setSelectionRange(0, 0);
            inputRef.current.blur();
        }

        setTimeout(() => {
            setIsTooltipShown(false);
        }, TOOLTIP_HIDE_DELAY);
    };

    return (
        <div className={styles.container}>
            <input
                ref={inputRef}
                type="text"
                name="share-link"
                id="share-link"
                readOnly
                autoComplete="off"
                value={url}
                className={styles.input}
                // Selects full input value on click
                onClick={handleInputClick}
            />
            <button
                type="button"
                className={styles.paste}
                onClick={handleCopyButtonClick}
                title="Copy share URL"
            >
                <IconPaste />
            </button>
            {isTooltipShown && <div className={styles.message}>URL copied!</div>}
        </div>
    );
};

export default StoryShareUrl;
