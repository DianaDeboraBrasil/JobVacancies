FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
 
FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["JobVacancies.API.csproj", "JobVacancies.API/"]
RUN dotnet restore "JobVacancies.API/JobVacancies.API.csproj"
WORKDIR "/src/JobVacancies.API"
COPY . .
RUN dotnet build "JobVacancies.API.csproj" -c Release -o /app/build
 
FROM build AS publish
RUN dotnet publish "JobVacancies.API.csproj" -c Release -o /app/publish
 
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
CMD ASPNETCORE_URLS=http://*:$PORT dotnet JobVacancies.API.dll
