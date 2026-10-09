using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistance;
using Microsoft.EntityFrameworkCore;

namespace Application.Actvities.Commands;

public class DeleteActivity
{
    public class Command : IRequest
    {
        public required string Id { get; init; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            Activity activity = await context.Activities.FirstOrDefaultAsync<Activity>(x => x.Id == request.Id, cancellationToken)
                ?? throw new Exception("Activity not found");
           context.Activities.Remove(activity);
           await context.SaveChangesAsync(cancellationToken);
        }
    }
}
