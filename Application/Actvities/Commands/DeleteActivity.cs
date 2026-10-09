using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace Application.Actvities;

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
