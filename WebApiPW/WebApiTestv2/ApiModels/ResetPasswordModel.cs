﻿namespace WebApiTestv2.ApiModels
{
    public class ResetPasswordModel
    {
        public string? Email { get; set; }
        public string? Token { get; set; }
        public string? NewPassword { get; set; }
    }
}
