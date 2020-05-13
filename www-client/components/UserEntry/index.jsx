import React, { useState, useEffect } from "react";
import moment from "moment";
import Cookie from "js-cookie";
import cx from "classnames";
import requestService from "../../utils/requestService";

import {
    UserEntryStyled,
    UserEntryVideoStyled,
    UserEntryFooterStyled,
    UserEntryInfoStyled,
    UserEntryCommentStyled,
    UserEntryDeleteBtnStyled,
    UserEntryLikeBtnStyled
} from "./styled";

const UserEntry = props => {
    const { _id, endpoint, name, comment, likes, youtubeId, added } = props;

    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(likes || 0);

    useEffect(() => {
        Cookie.get(`entry-${_id}-liked`) ? setIsLiked(true) : setIsLiked(false);
    }, []);

    const triggerLike = async () => {
        if (!Cookie.get(`entry-${_id}-liked`)) {
            try {
                const r = await requestService.putRequest(
                    `${endpoint}/entries/${_id}`
                );
                Cookie.set(`entry-${_id}-liked`, true);
                setIsLiked(true);
                setLikeCount(r.likes);
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <UserEntryStyled>
            <UserEntryVideoStyled>
                <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}?rel=0&amp;controls=0&amp;showinfo=0&amp;modestbranding=1&amp`}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </UserEntryVideoStyled>

            <UserEntryFooterStyled>
                <UserEntryCommentStyled>{comment}</UserEntryCommentStyled>

                <UserEntryInfoStyled>
                    <span>
                        <strong>Likes:</strong> {likeCount}
                    </span>
                </UserEntryInfoStyled>

                <UserEntryInfoStyled>
                    <span>
                        <strong>By:</strong> {name}
                    </span>
                    <span>
                        <strong>On:</strong>{" "}
                        {moment(added).format("MMM Do YYYY")}
                    </span>
                </UserEntryInfoStyled>
                <UserEntryLikeBtnStyled onClick={() => triggerLike(_id)}>
                    <svg style={{ fill: isLiked ? "#d61d29" : "#0d0d0d" }}>
                        <use xlinkHref="#icon-heart" />
                    </svg>
                </UserEntryLikeBtnStyled>

                <UserEntryDeleteBtnStyled
                    onClick={() => props.removeEntry(_id)}
                >
                    <svg>
                        <use xlinkHref="#icon-remove" />
                    </svg>
                </UserEntryDeleteBtnStyled>
            </UserEntryFooterStyled>
        </UserEntryStyled>
    );
};

export { UserEntry };
