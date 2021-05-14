using Microsoft.Extensions.Configuration;
using System;

namespace JobVacancies.API.Helper
{
    public class AppSettingsHelper
    {
        public static string Get(string Section, string tag)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(AppContext.BaseDirectory)
                .AddJsonFile("appsettings.json");

            var Parameters = builder.Build();

            var Attributes = Parameters.GetSection(Section);

            return Attributes[tag];
        }
    }
}
