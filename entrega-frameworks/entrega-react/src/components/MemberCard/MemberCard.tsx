import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import { MemberCardProps } from "../../model";
import "./MemberCard.css";

export const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <TableRow>
      <TableCell>
        <img
          src={member.avatar_url || "default-avatar-url.png"}
          alt={member.login}
          className="member-avatar"
        />
      </TableCell>

      <TableCell>{member.id}</TableCell>

      <TableCell>
        <Link to={`/detail-member/${member.id}/${member.login}`}>
          {member.login}
        </Link>
      </TableCell>
    </TableRow>
  );
};
